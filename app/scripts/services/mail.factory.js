'use strict';

/**
 * @ngdoc function
 * @name campusInvitationApp.factory:Mail
 * @description
 * # Mail
 * Service of the campusInvitationApp
 */
angular.module('campusInvitationApp')
  .factory('Mail', function () {
    var extend = angular.extend;
    /**
     * Email object use to send the notifications..
     *
     * {
     *   'message': {
     *     'html': '<p>Your body text here</p>',
     *     'text': 'Body text',
     *     'subject': 'Subject',
     *     'from_email': 'example@mail.com',
     *     'from_name': 'Example name',
     *     'to': [
     *       {
     *         name: 'Example name',
     *         email: 'example@mail.com',
     *         'type': 'to'
     *       }
     *     ],
     *     'headers': {
     *       'Reply-To': 'noreply@mail.com'
     *     }
     *   }
     * };
     */

    var email = {
      // Message.
      content: {},
      // Methods.
      toLearningCenter: toLearningCenter,
      toStudent: toStudent
    };

    /**
     * Return a message with with tinformation of the new student register in the learning center.
     *
     * @param student
     *  New Student information
     * @returns {{message: {html: string, text: string, subject: string, from_email: *, from_name: string, to: *[]}}}
     */
    function toLearningCenter(student) {
      return this.content = {
        'message': {
          'html': '<h1>Nuevo Estudiante</h1>' +
          '<p>Se ha registrado un nuevo estudiante, correo electrónico ' + student.email + '</p>',
          'text': 'Se ha registrado un nuevo estudiante, correo electrónico ' + student.email,
          'subject': 'Nuevo Estudiante',
          'from_email': student.email,
          'from_name': student.firstName + ' ' + student.lastName,
          'to': [
            {
              'name': 'Centro de Estudios Latino America',
              'email': 'centrodeestudios@bblatinamerica.org',
              'type': 'to'
            }
          ]
        }
      }
    }

    /**
     * Return a message with with tinformation of the new student register in the learning center.
     *
     * @param student
     *  New Student information
     * @returns {{message: {html: string, text: string, subject: string, from_email: *, from_name: string, to: *[]}}}
     */
    function toStudent(student) {
      return this.content = {
        'message': {
          'html': '<h1>Felicitaciones, ' + student.firstName + ' ' + student.lastName + '</h1>' +
          '<p>Te has registrado en el curso de cabalá, te enviaremos un nuevo correo con mas detalle sobre el curso. </p>',
          'text': 'Felicitaciones, ' + student.firstName + ' ' + student.lastName + ', te has registrado en el curso de cabalá, te enviaremos un nuevo correo con mas detalle sobre el curso.',
          'subject': 'Registro Exitoso al curso de cabalá',
          'from_email': 'centrodeestudios@bblatinamerica.org',
          'from_name': 'Centro de Estudios Latino America',
          'to': [
            {
              'name': student.firstName + ' ' + student.lastName,
              'email': student.email,
              'type': 'to'
            }
          ]
        }
      }
    }


    return email;

  });
