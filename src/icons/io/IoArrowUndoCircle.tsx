

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowUndoCircle = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm97.67,281.1c-24.07-25.21-51.51-38.68-108.58-38.68v37.32a8.32,8.32,0,0,1-14.05,6L146.58,254a8.2,8.2,0,0,1,0-11.94L231,162.29a8.32,8.32,0,0,1,14.05,6v37.32c88.73,0,117.42,55.64,122.87,117.09C368.65,330.42,359.07,334.75,353.67,329.1Z" />
        </G>
      </Svg>
    );
  }

