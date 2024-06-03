import { FaUser } from 'react-icons/fa';
import { MdQuestionMark } from "react-icons/md";
import { useTranslation } from 'react-i18next';

function Widget({ count, label }: { count: number; label?: string }) {
    const { t } = useTranslation();
    const translatedActiveUsers = t("active_users"); // Traducir una vez y reutilizar

    return (
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md">
            <div className="rounded-full bg-purple-500 p-2">
                {label === translatedActiveUsers ? (
                    <FaUser className="text-white text-2xl" />
                ) : (
                    <MdQuestionMark className="text-white text-2xl" />
                )}
            </div>
            <span className="text-white text-lg font-semibold mt-2">{count}</span>
            {label && <span className="text-white text-lg font-semibold mt-1">{label}</span>}
        </div>
    );
}

export default Widget;
