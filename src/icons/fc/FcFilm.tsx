

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcFilm = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M45,9H3v30h42V9z M22,37v-4h4v4H22z M30,37v-4h4v4H30z M38,37v-4h4v4H38z M14,37v-4h4v4H14z M6,37v-4h4v4H6 z M22,15v-4h4v4H22z M30,15v-4h4v4H30z M38,15v-4h4v4H38z M14,15v-4h4v4H14z M6,15v-4h4v4H6z" fill="#3F51B5" />
        </G>
      </Svg>
    );
  }

