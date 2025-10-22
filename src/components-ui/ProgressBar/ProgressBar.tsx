import s from './ProgressBar.module.scss';

type ProgressBarProps = {
  title: string,
  subtitle: string,
  value: number,
  disabled?: boolean
}

const ProgressBar = ({
                       title, subtitle, value, disabled = false
                     }: ProgressBarProps) => {
  return (
    <div className={s.progressBarWrapper}>
      <h4 className={s.progressBarTitle}>{title}</h4>
      <div className={s.progressBarTrack}>
        <div className={s.progressBarColoredPart} style={{width: value+'%', background: disabled ? "rgba(37, 37, 38, 0.4)" : ''}}></div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </div>
  );
};

export default ProgressBar;