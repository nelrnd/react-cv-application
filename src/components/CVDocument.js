import React from 'react';
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});

const CVDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.bar}>
        <View style={styles.photoWrapper}>
          <Image src={props.general.photoUrl} />
        </View>
        <Text style={styles.small}>Email</Text>
        <Text>{props.general.email}</Text>
        <Text style={styles.small}>Phone number</Text>
        <Text>{props.general.phone}</Text>
        <Text style={styles.small}>Location</Text>
        <Text>{props.general.location}</Text>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
