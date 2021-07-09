import { useState } from 'react';
import { RMIUploader } from 'react-multiple-image-uploader';

const dataSources = [
    {
        id: 1,
        dataURL: 'https://picsum.photos/seed/1/600',
    },
];

function Test() {
    const [visible, setVisible] = useState(false);

    const handleSetVisible = () => {
        setVisible(true);
        console.log('test');
    };
    const hideModal = () => {
        setVisible(false);
    };
    const onUpload = (data) => {
        console.log('Upload files', data);
    };
    const onSelect = (data) => {
        console.log('Select files', data);
    };
    const onRemove = (id) => {
        console.log('Remove image id', id);
    };

    return (
        <div className="App">
            <button onClick={handleSetVisible}>Show Me</button>
            <RMIUploader
                isOpen={visible}
                hideModal={hideModal}
                onSelect={onSelect}
                onUpload={onUpload}
                onRemove={onRemove}
                dataSources={dataSources}
            />
        </div>
    );
}

export default Test;
