import fb from '../Store/firebase';
import { getStaffByEmail } from '../Store/firebase/Staff';

const isAdmin = () => {
  return getStaffByEmail(fb.auth().currentUser.email).then(data => {
    if (
      process.env.NODE_ENV === 'development' ||
      (data && data.doc && data.doc.isAdmin)
    ) {
      return true;
    } else {
      return false;
    }
  });
};

export default isAdmin;
