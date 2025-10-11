

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberThreeDuotone = (props: IconProps) => {

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
          <Path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" />
          <Path d="M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92A40,40,0,1,0,120,120a8,8,0,0,1-6.4-12.8L152,56H88a8,8,0,0,1,0-16h80a8,8,0,0,1,6.4,12.8l-39.84,53.12A56.1,56.1,0,0,1,176,160Z" />
        </G>
      </Svg>
    );
  }

