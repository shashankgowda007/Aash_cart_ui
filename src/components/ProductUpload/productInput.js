const React = require('react');
const { useState } = require('react');
const { google } = require('googleapis');
const FormData = require('form-data');

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

const ProductInput = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        images: Array(5).fill(null),
    });

    const handleChange = async (e) => {
        if (e.target.name.startsWith('image')) {
            const index = Number(e.target.name.replace('image', ''));
            const newImages = [...product.images];
            const reader = new FileReader();

            reader.onload = async (event) => {
                newImages[index] = event.target.result;
                setProduct({ ...product, images: newImages });

                try {
                    // Upload the image to Google Drive
                    const imageId = await uploadImageToDrive(event.target.result, product.name);
                    console.log('Image uploaded to Google Drive. File ID:', imageId);
                } catch (error) {
                    console.error('Error uploading image to Google Drive:', error);
                }
            };

            if (e.target.files[0]) {
                reader.readAsDataURL(e.target.files[0]);
            }
        } else {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', JSON.stringify(product, null, 2));
        // Submit the rest of the product data as needed.
    };

    const uploadImageToDrive = async (base64Image, name) => {
        const drive = await authenticateWithGoogleDrive();
        const base64data = base64Image.replace(/^data:image\/\w+;base64,/, '');

        try {
            const buffer = Buffer.from(base64data, 'base64');

            const form = new FormData();
            form.append('image', buffer, {
                filename: `${name}.png`,
                contentType: 'image/png',
            });

            // Upload the image to Google Drive
            const res = await drive.files.create({
                media: {
                    mimeType: 'multipart/form-data',
                    body: form,
                },
            });

            return res.data.id;
        } catch (error) {
            console.error('Error uploading image to Google Drive:', error);
            throw new Error('Error uploading image to Google Drive');
        }
    };

    const authenticateWithGoogleDrive = async () => {
        const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

        try {
            // Authenticate with Google Drive, using the provided credentials
            // You can add logic here to handle authentication as needed.
        } catch (error) {
            console.error('Error authenticating with Google Drive:', error);
            throw new Error('Error authenticating with Google Drive');
        }
    };

    return (
        <div>
            <form className="product-input" onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input type="text" name="name" value={product.name} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={product.description} onChange={handleChange} required />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={product.price} onChange={handleChange} required />
                </label>
                {product.images.map((image, index) => (
                    <label key={index}>
                        Image {index + 1}:
                        <input type="file" name={`image${index}`} onChange={handleChange} required={index === 0} />
                    </label>
                ))}
                <button type="submit">Add Product</button>
            </form>

            <div className="json-display">
                <h2>Submitted Data (JSON)</h2>
                <pre>{JSON.stringify(product, null, 2)}</pre>
            </div>
        </div>
    );
};

export default ProductInput;
