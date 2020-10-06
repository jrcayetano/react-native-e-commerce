import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import EditProfileForm from './EditProfileForm';
import {getStates} from './../../services/States.service';
import {connect, useDispatch} from 'react-redux';
import {SetUsername} from './../../state/actions/UserLoggedActions';
import {updateProfile} from './../../services/User.service';

const Profile = ({profile}) => {
  const [states, setStates] = useState([]);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    getStates()
      .then((response) => setStates(response.data))
      .catch((error) => alert(error));
  }, []);

  useEffect(() => {
    setUserId(profile.id);
    setPassword(profile.repassword);
  }, [profile]);

  const handleSubmit = (userProfile) => {
    updateProfile(userProfile, userId, password).then((response) => {
      if (response && response.data) {
        dispatch(SetUsername(response.data.username));
      }
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <EditProfileForm
          states={states}
          profile={profile}
          onSubmitForm={handleSubmit}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  profile: state.userLogged.profile,
});

export default connect(mapStateToProps)(React.memo(Profile));
