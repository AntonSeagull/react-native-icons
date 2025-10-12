

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcFilmReel = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Circle  fill="#90A4AE" cx="24" cy="24" r="19" />
          <Circle  fill="#37474F" cx="24" cy="24" r="2" />
          <Path  fill="#3F51B5" d="M43,39V24h-4v15c0,5,4,9,9,9v-4C45.2,44,43,41.8,43,39z" />
          <Circle  cx="24" cy="14" r="5" />
          <Circle  cx="24" cy="34" r="5" />
          <Circle  cx="34" cy="24" r="5" />
          <Circle  cx="14" cy="24" r="5" />
        </G>
      </Svg>
    );
  }

