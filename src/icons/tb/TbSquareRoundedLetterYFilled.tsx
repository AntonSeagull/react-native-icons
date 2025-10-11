

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSquareRoundedLetterYFilled = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11.676 2.001l.324 -.001c7.752 0 10 2.248 10 10l-.005 .642c-.126 7.235 -2.461 9.358 -9.995 9.358l-.642 -.005c-7.13 -.125 -9.295 -2.395 -9.358 -9.67v-.325c0 -7.643 2.185 -9.936 9.676 -9.999m2.695 5.07a1 1 0 0 0 -1.3 .558l-1.071 2.678l-1.072 -2.678a1 1 0 0 0 -1.856 .742l1.928 4.823v2.806a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-2.809l1.928 -4.82a1 1 0 0 0 -.45 -1.25z" />
        </G>
      </Svg>
    );
  }

