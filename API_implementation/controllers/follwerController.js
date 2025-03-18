const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const { users, followers } = require('../utils/mockData');

// @desc    Get all followers for a user
// @route   GET /users/:id/followers
// @access  Public
exports.getFollowers = asyncHandler(async (req, res, next) => {
    const userId = req.params.id;

    // Validate user existence
    const userExists = users.some(user => user.id === userId);
    if (!userExists) {
        return next(new ErrorResponse(`User with id ${userId} not found`, 404));
    }

    // Find all followers for the user
    const userFollowers = followers.filter(follower => follower.following_id === userId);

    res.status(200).json({
        success: true,
        message: userFollowers.length ? "Followers found" : "No followers found",
        data: userFollowers
    });
});

// @desc    Follow a user
// @route   POST /users/:id/follow
// @access  Private
exports.followUser = asyncHandler(async (req, res, next) => {
    const userId = req.params.id; // ID of the user to follow
    const followerId = req.body.follower_id; // ID of the follower

    // Validate user existence
    const userExists = users.some(user => user.id === userId);
    const followerExists = users.some(user => user.id === followerId);

    if (!userExists || !followerExists) {
        return next(new ErrorResponse('User or follower not found', 404));
    }

    // Check if the follower is already following the user
    const alreadyFollowing = followers.some(
        follower => follower.follower_id === followerId && follower.following_id === userId
    );

    if (alreadyFollowing) {
        return next(new ErrorResponse('You are already following this user', 400));
    }

    // Add the follow relationship
    const newFollower = {
        id: (followers.length + 1).toString(), // Generate a new ID
        follower_id: followerId,
        following_id: userId,
        created_at: new Date().toISOString()
    };

    followers.push(newFollower);

    res.status(201).json({
        success: true,
        message: 'User followed successfully',
        data: newFollower
    });
});

// @desc    Unfollow a user
// @route   DELETE /users/:id/unfollow/:followerId
// @access  Private
exports.unfollowUser = asyncHandler(async (req, res, next) => {
    const userId = req.params.id; // ID of the user to unfollow
    const followerId = req.params.followerId; // ID of the follower

    // Find the follow relationship
    const followIndex = followers.findIndex(
        follower => follower.follower_id === followerId && follower.following_id === userId
    );

    if (followIndex === -1) {
        return next(new ErrorResponse('You are not following this user', 400));
    }

    // Remove the follow relationship
    followers.splice(followIndex, 1);

    res.status(200).json({
        success: true,
        message: 'User unfollowed successfully',
        data: null
    });
});