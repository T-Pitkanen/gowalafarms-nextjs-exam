import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const sponsorScheme = new Schema({
    
    name: { type: String,  required: true },
    imagePath: { type: String, default: '/products/no-sponsor.jpg' },
    created: { type: Date, default : new Date() },

});

export default mongoose.models.sponsor || mongoose.model('sponsor', sponsorScheme);