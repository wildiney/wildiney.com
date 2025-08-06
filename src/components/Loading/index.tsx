
import { useTranslation } from 'react-i18next';

function Loading () {
  const { t } = useTranslation()

  return (
    <div className="fixed z-50 flex flex-col items-center justify-center h-screen w-full bg-white/20 backdrop-blur-xs">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin mb-3"></div>
      <span className="text-gray-500 text-base">{t('loading.loadingText')}</span>
    </div>
  )
}

export default Loading