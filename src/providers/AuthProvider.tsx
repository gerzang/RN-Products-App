

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PropsWithChildren, useEffect } from 'react';
import { useAuthStore } from '../presentation/store/auth/useAuthStore';
import { RootStackParams } from '../presentation/navigation/StackNavigation';


const AuthProvider = ({ children }: PropsWithChildren) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    const { checkStatus, status } = useAuthStore();


    useEffect(() => {
        checkStatus();
    }, []);
    useEffect(() => {         
              
        
        if (status !== 'checking') {
            if (status === 'authenticated') {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }],
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'LoginScreen' }],
                })
            }
        }
    }, [status]);

    return (
        <>{children}</>
    )
}

export default AuthProvider;
