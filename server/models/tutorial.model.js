module.exports = mongoose => {
    // Declaring our Scheme for mongoose
    const Tutorial = mongoose.model(
        'tutorial',
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            // Auto generates a timestamp
            {timestamps: true}
        )
    )
    return Tutorial
}