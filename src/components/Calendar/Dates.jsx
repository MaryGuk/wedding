import s from './Dates.module.css';
import clsx from 'clsx';

function Dates() {
  return (
    <div className={clsx(s.gridContainer)}>
      {[
        ...['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((value) => (<div className={clsx(s.headerItem, s.dateItem)}>{value}</div>)),
        ...[
          ...Array.from({ length: 2 }).map(() => ''),
          ...Array.from({ length: 30 }).map((_, idx) => (String(idx + 1)))
        ].map((value) => (<div className={s.dateItem}>{Number(value) === 26 ?
            (<>
              <div>{value}</div>
              <div className={s.heart}>
                <img src="heart.svg" width="110px" height="110px"></img>
              </div>
            </>)
            : value}</div>))]}
    </div>
  );
}

export default Dates;
