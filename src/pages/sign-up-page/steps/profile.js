import { useDispatch } from 'react-redux';
import { ProfileForm, updateCurrentUser } from 'features/users';

export const Profile = (props) => {
	const { profile, onCompleteStep } = props;
	const dispatch = useDispatch();
	const onProfileChange = (field, value) => {
		dispatch(updateCurrentUser({
			[field]: value
		}))
	}

	return (
		<div className="profile-form-wrapper">
			<ProfileForm
				profile={profile}
				onChange={onProfileChange}
				onContinue={onCompleteStep}
			/>
		</div>
	);
}

export default Profile;