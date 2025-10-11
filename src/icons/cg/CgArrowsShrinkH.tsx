

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowsShrinkH = (props: IconProps) => {

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
          <Path d="M1 7H3V17H1V7Z" fill="currentColor" />
          <Path d="M8.44769 7.75732L9.86191 9.17154L8.03344 11H15.9664L14.138 9.17154L15.5522 7.75732L19.7948 12L15.5522 16.2426L14.138 14.8284L15.9664 13H8.03354L9.86194 14.8284L8.44773 16.2426L4.20505 12L8.44769 7.75732Z" fill="currentColor" />
          <Path d="M23 7H21V17H23V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

