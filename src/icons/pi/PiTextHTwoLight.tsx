

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextHTwoLight = (props: IconProps) => {

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
          <Path d="M150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0Zm90,146H204L240,154.05A30,30,0,1,0,187.71,126,6,6,0,1,0,199,130a18,18,0,0,1,14.47-11.82,18,18,0,0,1,16.87,28.66L187.2,204.4A6,6,0,0,0,192,214h48a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

