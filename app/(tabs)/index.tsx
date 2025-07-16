import ParallaxScrollView from '@/components/ParallaxScrollView';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Animated.View style={[styles.headerContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.profileBackground}>
            <Image
              source={require('@/assets/images/foto-guru.jpg')}
              style={styles.backgroundImage}
              blurRadius={2}
            />
          </View>
          <View style={styles.profileContent}>
            <Image
              source={require('@/assets/images/smk6.png')}
              style={styles.reactLogo}
              contentFit='contain'
            />
            <View style={styles.schoolInfo}>
              <View style={styles.nameContainer}>
                <Text style={styles.schoolName}>@SMKN 6 MALANG</Text>
                <MaterialIcons name="verified" size={18} color="#1DA1F2" style={styles.verifiedIcon} />
              </View>
              <Text style={styles.schoolHandle}>smk_6 official</Text>
            </View>
            <View style={styles.socialIcons}>
              <TouchableOpacity>
                <FontAwesome name="instagram" size={20} color="#E1306C" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="facebook" size={20} color="#4267B2" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="youtube" size={20} color="#FF0000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </Animated.View>
      }>

      {/* Dekorasi Atas */}
      <View style={styles.topDecoration}>
        <View style={styles.decorationCircle} />
        <View style={[styles.decorationCircle, { backgroundColor: '#FFD700', right: 30, top: -10 }]} />
      </View>

      {/* Informasi Sekolah */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionDecoration} />
        <Text style={styles.sectionTitle}>Tentang Sekolah</Text>
        <Text style={styles.sectionContent}>
          SMKN 6 Malang adalah sekolah kejuruan unggulan yang berfokus pada pengembangan kompetensi siswa di bidang teknologi dan bisnis.
        </Text>
      </View>

      {/* Visi Misi */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionDecoration} />
        <Text style={styles.sectionTitle}>Visi Misi</Text>
        <Text style={styles.sectionSubTitle}>Visi:</Text>
        <Text style={styles.sectionContent}>
          Menjadi sekolah kejuruan berstandar internasional yang menghasilkan lulusan kompeten dan berkarakter.
        </Text>
        <Text style={styles.sectionSubTitle}>Misi:</Text>
        <Text style={styles.sectionContent}>
          1. Mengembangkan kurikulum berbasis kompetensi{'\n'}
          2. Meningkatkan kualitas pengajaran{'\n'}
          3. Membangun kerjasama dengan industri
        </Text>
      </View>

      {/* Program Unggulan */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionDecoration} />
        <Text style={styles.sectionTitle}>Program Unggulan</Text>
        <Text style={styles.sectionContent}>
          - Kelas industri{'\n'}
          - Teaching factory{'\n'}
          - Sertifikasi kompetensi
        </Text>
      </View>

      {/* Dekorasi Bawah */}
      <View style={styles.bottomDecoration}>
        <View style={[styles.decorationCircle, { backgroundColor: '#32CD32' }]} />
      </View>

      {/* Kontak */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionDecoration} />
        <Text style={styles.sectionTitle}>Kontak Kami</Text>
        <Text style={styles.sectionContent}>
          Alamat: Jl. Mayjen Sungkono No.3, Malang{'\n'}
          Telepon: (0341) 1234567{'\n'}
          Email: info@smkn6malang.sch.id{'\n'}
          Website: www.smkn6malang.sch.id
        </Text>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 10,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  profileBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    opacity: 0.3,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    flex: 1,
  },
  reactLogo: {
    height: 70,
    width: 70,
    borderRadius: 12,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  schoolInfo: {
    flexDirection: 'column',
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  verifiedIcon: {
    marginLeft: 4,
  },
  schoolHandle: {
    fontSize: 14,
    color: '#657786',
    marginTop: 2,
  },
  socialIcons: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  icon: {
    marginHorizontal: 6,
  },
  followButton: {
    backgroundColor: '#1DA1F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginLeft: 10,
  },
  followButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionContainer: {
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  sectionDecoration: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: '#1DA1F2',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1D3D47',
  },
  sectionSubTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    color: '#2C5364',
  },
  sectionContent: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  topDecoration: {
    position: 'relative',
    height: 30,
    marginBottom: 10,
  },
  bottomDecoration: {
    position: 'relative',
    height: 30,
    marginTop: 10,
  },
  decorationCircle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6B6B',
    opacity: 0.2,
    right: 10,
    top: -20,
  },
});