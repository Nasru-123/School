import baseModel from '../../utils/baseModel';


export class Admission extends baseModel {
  // Table name is the only required property.
  static get tableName() {
    return 'admissions';
  }
  static get idColumn() {
    return 'admissionId';
  }

}