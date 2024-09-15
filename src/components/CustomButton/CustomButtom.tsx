import styles from '@/components/CustomButton/CustomButton.module.css';

interface ButtonProps {
    color?: string; 
    buttonText: string;
    onClick: () => void;
}

const CustomButton = ({ buttonText, onClick, color = '#1E90FF' }: ButtonProps) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {buttonText}
        </button>
    );
};

export default CustomButton;