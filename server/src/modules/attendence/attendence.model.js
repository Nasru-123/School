import baseModel from '../../utils/baseModel';


export class Attendence extends baseModel {
  // Table name is the only required property.
  static get tableName() {
    return 'attendence';
  }
  static get idColumn() {
    return 'attendenceId';
  }
}