export interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface ImageCardProps {
  image: {
    image: Image;
    download_url: string;
    author: string;
  };
  onClick: () => void;
}

export interface ImageModalProps {
  image: Image;
  onClose: () => void;
  download_url: string;
}
