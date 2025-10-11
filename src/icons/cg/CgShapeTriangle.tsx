

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgShapeTriangle = (props: IconProps) => {

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
          <Path d="M11.6603 5L3 20H20.3205L11.6603 5ZM11.6603 11L8.19615 17H15.1244L11.6603 11Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

