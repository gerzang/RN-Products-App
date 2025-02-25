

import { StackScreenProps } from '@react-navigation/stack';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { useState } from 'react';
import { Alert, ScrollView, useWindowDimensions } from 'react-native';
import { RootStackParams } from '../../navigation/StackNavigation';
import MyIcon from '../../components/ui/MyIcon';
import { useAuthStore } from '../../store/auth/useAuthStore';



interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> { }

const LoginScreen = ({ navigation }: Props) => {

    const { login } = useAuthStore();

    const { height } = useWindowDimensions();

    const [isPosting, setIsPosting] = useState(false)

    const [form, setForm] = useState({
        email: '',
        password: '',
    });


    const onLogin = async () => {        

        if (form.email.length === 0 || form.password.length === 0) {
            return;
        }
        setIsPosting(true);        
        const wasSuccessful = await login(form.email, form.password);
        setIsPosting(false);

        if (wasSuccessful) return;

        Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }



    return (
        <Layout style={{ flex: 1 }}>
            <ScrollView style={{ marginHorizontal: 40 }}>
                <Layout style={{ paddingTop: height * 0.35 }}>
                    <Text category="h1">Ingresar</Text>
                    <Text category="p2">Por favor, ingrese para continuar</Text>
                </Layout>


                <Layout style={{ marginTop: 20 }}>
                    <Input
                        placeholder="Correo electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={form.email}
                        onChangeText={(email) => setForm({ ...form, email })}
                        accessoryLeft={<MyIcon name="email-outline" />}
                        style={{ marginBottom: 10 }}
                    />

                    <Input
                        placeholder="Contraseña"
                        autoCapitalize="none"
                        secureTextEntry
                        value={form.password}
                        onChangeText={(password) => setForm({ ...form, password })}
                        accessoryLeft={<MyIcon name="lock-outline" />}
                        style={{ marginBottom: 10 }}
                    />
                </Layout>
                <Layout style={{ height: 10 }} />

                <Layout>
                    <Button
                        disabled={isPosting}
                        accessoryRight={<MyIcon name="arrow-forward-outline" white />}
                        onPress={onLogin}>Ingresar</Button>
                </Layout>

                <Layout style={{ height: 50 }} />
                <Layout
                    style={{
                        alignItems: 'flex-end',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <Text>¿No tienes cuenta?</Text>
                    <Text
                        status="primary"
                        category="s1"
                        onPress={() => navigation.navigate('RegisterScreen')}
                    >
                        {' '}
                        crea una{' '}
                    </Text>
                </Layout>
            </ScrollView>
        </Layout>
    )
}

export default LoginScreen;
