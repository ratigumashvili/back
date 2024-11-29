import type { Schema, Struct } from '@strapi/strapi';

export interface ConferenceConference extends Struct.ComponentSchema {
  collectionName: 'components_conference_conferences';
  info: {
    description: '';
    displayName: 'conference';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images'>;
    dates: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    urlTitle: Schema.Attribute.String;
  };
}

export interface PersonnelPerson extends Struct.ComponentSchema {
  collectionName: 'components_personnel_people';
  info: {
    displayName: 'person';
  };
  attributes: {
    fullName: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface PersonnelPersonnel extends Struct.ComponentSchema {
  collectionName: 'components_personnel_personnel';
  info: {
    description: '';
    displayName: 'Employee';
  };
  attributes: {
    blockTitle: Schema.Attribute.String;
    person: Schema.Attribute.Component<'personnel.person', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'conference.conference': ConferenceConference;
      'personnel.person': PersonnelPerson;
      'personnel.personnel': PersonnelPersonnel;
    }
  }
}
