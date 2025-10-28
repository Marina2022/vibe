import s from './Separator.module.scss';

const Separator = ({className}: { className: string }) => {
  return (
    <div className={s.separator + ' ' + className}></div>
  );
};

export default Separator;