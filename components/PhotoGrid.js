export default function PhotoGrid({ photos }) {
    return (
        <div className="w-[calc(100%+2rem)] -ml-4">
            <div className="w-full grid grid-cols-2 gap-0">
                {photos.map((photo, index) => (
                    <div 
                        key={photo.id} 
                        className={`relative aspect-square p-1
                            ${index % 4 >= 2 ? 'translate-x-1/2' : ''}`}
                    >
                        <div className="w-full h-full overflow-hidden">
                            <img
                                src={photo.url}
                                alt={photo.description}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
