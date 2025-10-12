

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiNotes = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M18.831 4.059c-.107-.095-.243-.139-.394-.121l-11 1.25c-.249.031-.437.244-.437.496v10.316c-1.654 0-3 1.122-3 2.5s1.346 2.5 3 2.5 3-1.122 3-2.5v-7.609l6-.625v3.734c-1.654 0-3 1.122-3 2.5s1.346 2.5 3 2.5 3-1.122 3-2.5v-12.066c0-.144-.062-.28-.169-.375z" />
        </G>
      </Svg>
    );
  }

