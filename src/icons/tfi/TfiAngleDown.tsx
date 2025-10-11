

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiAngleDown = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16.354 5.075l-7.855 7.854-7.853-7.854 0.707-0.707 7.145 7.146 7.148-7.147 0.708 0.708z" fill="#000000" />
        </G>
      </Svg>
    );
  }

