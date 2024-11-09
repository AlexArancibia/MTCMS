import type { Struct, Schema } from '@strapi/strapi';

export interface QuizQuiz extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quizzes';
  info: {
    displayName: 'Quiz';
    icon: 'lightbulb';
  };
  attributes: {
    question: Schema.Attribute.Component<'quiz.question', true>;
  };
}

export interface QuizQuestion extends Struct.ComponentSchema {
  collectionName: 'components_quiz_questions';
  info: {
    displayName: 'question';
    icon: 'question';
    description: '';
  };
  attributes: {
    content: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    answer: Schema.Attribute.Component<'quiz.answer', true>;
  };
}

export interface QuizAnswer extends Struct.ComponentSchema {
  collectionName: 'components_quiz_answers';
  info: {
    displayName: 'Answer';
    icon: 'check';
  };
  attributes: {
    content: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    isCorrect: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ChapterRecordedVideo extends Struct.ComponentSchema {
  collectionName: 'components_chapter_recorded_videos';
  info: {
    displayName: 'RecordedVideo';
    icon: 'volumeUp';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
    playbackId: Schema.Attribute.String;
    recordedVideo: Schema.Attribute.Media<'files' | 'videos'>;
    mux_video_uploader_mux_asset: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::mux-video-uploader.mux-asset'
    >;
  };
}

export interface ChapterLiveSession extends Struct.ComponentSchema {
  collectionName: 'components_chapter_live_sessions';
  info: {
    displayName: 'LiveSession';
    icon: 'cast';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<['webex', 'teams', 'zoom', 'meet']> &
      Schema.Attribute.Required;
    date: Schema.Attribute.DateTime;
  };
}

export interface ChapterAttachment extends Struct.ComponentSchema {
  collectionName: 'components_chapter_attachments';
  info: {
    displayName: 'Attachment';
    icon: 'file';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsPublicPlayer extends Struct.ComponentSchema {
  collectionName: 'components_elements_public_players';
  info: {
    displayName: 'Public Player';
    description: '';
  };
  attributes: {
    videoId: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
    timecode: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'quiz.quiz': QuizQuiz;
      'quiz.question': QuizQuestion;
      'quiz.answer': QuizAnswer;
      'chapter.recorded-video': ChapterRecordedVideo;
      'chapter.live-session': ChapterLiveSession;
      'chapter.attachment': ChapterAttachment;
      'elements.public-player': ElementsPublicPlayer;
    }
  }
}
