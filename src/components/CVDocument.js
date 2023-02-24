import React from 'react';
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import InterRegular from '../assets/Inter-Regular.ttf';
import InterSemiBold from '../assets/Inter-SemiBold.ttf';

Font.register({
  family: 'Inter',
  fonts: [{ src: InterRegular }, { src: InterSemiBold, fontWeight: 600 }],
});

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: 'Inter',
  },
  bar: {
    flex: 1,
    maxWidth: '33.33vw',
    backgroundColor: '#e9e9f0',
    padding: 25,
  },
  photo: {
    height: 197,
    objectFit: 'cover',
    marginBottom: 25,
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
  },
  barTab: {
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
    fontFamily: 'Inter',
  },
  bold: {
    fontWeight: 600,
  },
  main: {
    flex: 2,
  },
  header: {
    backgroundColor: '#3c4ce3',
    width: '100%',
    height: 100,
    padding: 25,
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
  },
  title: {
    fontSize: 23,
    fontWeight: 'semibold',
    color: 'white',
  },
  subTitle: {
    fontSize: 16,
    color: '#A4ABEB',
  },
  section: {
    margin: 25,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: 'semibold',
  },
  divider: {
    height: 1,
    margin: '0 25px',
    backgroundColor: '#F0F0F0',
  },
});

const CVDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.bar}>
        <Image source={props.general.photoUrl} style={styles.photo} />
        <View style={styles.barTab}>
          <Text style={styles.small}>Email</Text>
          <Text style={styles.text}>{props.general.email}</Text>
        </View>
        <View style={styles.barTab}>
          <Text style={styles.small}>Phone number</Text>
          <Text style={styles.text}>{props.general.phone}</Text>
        </View>
        <View style={styles.barTab}>
          <Text style={styles.small}>Location</Text>
          <Text style={styles.text}>{props.general.location}</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.general.fullName}</Text>
          <Text style={styles.subTitle}>{props.general.jobTitle}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Profile</Text>
          <Text style={styles.text}>{props.general.profile}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Education</Text>
          {props.education.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.small}>{item.dateOfStudy}</Text>
                <Text style={styles.text}>
                  <Text style={styles.bold}>{item.schoolName}</Text>
                </Text>
                <Text style={styles.text}>{item.titleOfStudy}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.divider}></View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Work experience</Text>
          {props.work.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.small}>{item.dateOfWork}</Text>
                <Text style={styles.text}>
                  {item.positionTitle} at{' '}
                  <Text style={styles.bold}>{item.companyName}</Text>
                </Text>
                {item.mainTasks &&
                  item.mainTasks.split(',').map((item, index) => {
                    return (
                      <Text style={styles.text} key={index}>
                        • {item}
                      </Text>
                    );
                  })}
              </View>
            );
          })}
        </View>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
