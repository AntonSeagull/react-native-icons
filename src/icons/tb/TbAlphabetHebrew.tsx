

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAlphabetHebrew = (props: IconProps) => {

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
          <Path d="M7 6c2.333 5.143 6.611 6.857 9.333 12" />
          <Path d="M13.667 14c2.505 -1.5 2.666 -4.141 2.666 -5.333c0 -1.778 -.443 -2.667 -.443 -2.667" />
          <Path d="M7.485 18s-.485 -.905 -.485 -2.714c0 -1.172 .164 -3.722 2.641 -5.27" />
        </G>
      </Svg>
    );
  }

