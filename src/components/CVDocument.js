import React from 'react';
import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import InterRegular from '../assets/Inter-Regular.ttf';
import InterSemiBold from '../assets/Inter-SemiBold.ttf';

// Register font
Font.register({
  family: 'Inter',
  fonts: [{ src: InterRegular }, { src: InterSemiBold, fontWeight: 600 }],
});

// Styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: 'Inter',
  },
  sidebar: {
    width: '33.33%',
    padding: 25,
    backgroundColor: '#e9e9f0',
  },
  photo: {
    height: 197,
    objectFit: 'cover',
    marginBottom: 25,
    border: 'solid 1px rgba(0, 0, 0, 0.2)',
  },
  sidebarTab: {
    marginBottom: 16,
  },
  small: {
    fontSize: 8,
    color: '#818181',
    marginBottom: 4.5,
  },
  text: {
    fontSize: 11,
    lineHeight: 1.5,
  },
  textBold: {
    fontSize: 11,
    lineHeight: 1.5,
    fontWeight: 600,
  },
  wrapper: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3c4ce3',
    padding: 25,
    marginTop: 50,
  },
  title: {
    fontSize: 23,
    fontWeight: 600,
    color: 'white',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#A4ABEB',
  },
  main: {
    marginTop: 40,
  },
  section: {
    margin: '0 25px',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  sectionHeading: {
    fontSize: 12,
    fontWeight: 600,
  },
  divider: {
    backgroundColor: '#F0F0F0',
    height: 1,
    margin: '20px 25px',
  },
});

// Document
function CVDocument({ general, education, work }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          <Image
            source={general.photoUrl || '../assets/photo-default.jpeg'}
            style={styles.photo}
          />
          <View style={styles.sidebarTab}>
            <Text style={styles.small}>Email</Text>
            <Text style={styles.text}>{general.email}</Text>
          </View>
          <View style={styles.sidebarTab}>
            <Text style={styles.small}>Phone</Text>
            <Text style={styles.text}>{general.phoneNumber}</Text>
          </View>
          <View style={styles.sidebarTab}>
            <Text style={styles.small}>Location</Text>
            <Text style={styles.text}>{general.location}</Text>
          </View>
        </View>

        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{general.fullName}</Text>
            <Text style={styles.subtitle}>{general.jobTitle}</Text>
          </View>

          <View style={styles.main}>
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Profile</Text>
              <Text style={styles.text}>{general.description}</Text>
            </View>

            <View style={styles.divider}></View>

            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Education</Text>
              {education.map((item, index) => (
                <View key={index}>
                  <Text style={styles.small}>{item.dateOfStudy}</Text>
                  <Text style={styles.textBold}>{item.schoolName}</Text>
                  <Text style={styles.text}>{item.titleOfStudy}</Text>
                </View>
              ))}
            </View>

            <View style={styles.divider}></View>

            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Work experience</Text>
              {work.map((item, index) => (
                <View key={index}>
                  <Text style={styles.small}>{item.dateOfWork}</Text>
                  <Text style={styles.text}>
                    {item.positionTitle} at{' '}
                    <Text style={styles.textBold}>{item.companyName} </Text>
                  </Text>
                  {item.mainTasks.split(',').length > 0 &&
                    item.mainTasks.split(',').map((item, index) => (
                      <Text key={index} style={styles.text}>
                        • {item}
                      </Text>
                    ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CVDocument;
