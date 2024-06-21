import { AppointmentForm } from '../../components';

import s from './MakeAnAppointmentPopup.module.css';

interface MakeAnAppointmentPopupProps {
  name: string;
  avatar: string;
}

const MakeAnAppointmentPopup = ({ name, avatar }: MakeAnAppointmentPopupProps) => {
  return (
    <>
      <p className={s.title}>Make an appointment with a babysitter</p>
      <p className={s.description}>
        Arranging a meeting with a caregiver for your child is the first step to creating
        a safe and comfortable environment. Fill out the form below so we can match you
        with the perfect care partner.
      </p>
      <div className={s.nannyInfoCard}>
        <img className={s.nannyAvatar} src={avatar} alt={name} width={44} height={44} />
        <div>
          <p className={s.yourNannyLabel}>Your nanny</p>
          <p className={s.nannyName}>{name}</p>
        </div>
      </div>
      <AppointmentForm />
    </>
  );
};

export default MakeAnAppointmentPopup;
