

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSquareRoundedLetterHFilled = (props: IconProps) => {

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
          <Path  d="M11.676 2.001l.324 -.001c7.752 0 10 2.248 10 10l-.005 .642c-.126 7.235 -2.461 9.358 -9.995 9.358l-.642 -.005c-7.13 -.125 -9.295 -2.395 -9.358 -9.67v-.325c0 -7.643 2.185 -9.936 9.676 -9.999m2.324 4.999a1 1 0 0 0 -1 1v3h-2v-3a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v8a1 1 0 0 0 2 0v-3h2v3a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1" />
        </G>
      </Svg>
    );
  }

