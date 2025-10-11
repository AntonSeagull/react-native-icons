

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineUpRightLight = (props: IconProps) => {

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
          <Path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216ZM80,174a6,6,0,0,0,4.24-1.76L186,70.49V152a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H96a6,6,0,0,0,0,12h81.51L75.76,163.76A6,6,0,0,0,80,174Z" />
        </G>
      </Svg>
    );
  }

