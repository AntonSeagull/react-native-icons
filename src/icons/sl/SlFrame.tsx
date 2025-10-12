

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SlFrame = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 512, 512)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M224 112H32c-17.664 0-32 14.336-32 32v192c0 17.664 14.336 32 32 32s32-14.336 32-32V176h160c17.664 0 32-14.336 32-32s-14.336-32-32-32zm768 544c-17.664 0-32 14.336-32 32v160H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h192c17.664 0 32-14.336 32-32V688c0-17.664-14.336-32-32-32zM224 848H64V688c0-17.664-14.336-32-32-32S0 670.336 0 688v192c0 17.664 14.336 32 32 32h192c17.664 0 32-14.336 32-32s-14.336-32-32-32zm768-736H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h160v160c0 17.664 14.336 32 32 32s32-14.336 32-32V144c0-17.664-14.336-32-32-32z" />
        </G>
      </Svg>
    );
  }

