

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextHBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M212,56V200a12,12,0,0,1-24,0V140H68v60a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0v60H188V56a12,12,0,0,1,24,0Z" />
        </G>
      </Svg>
    );
  }

