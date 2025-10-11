

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscArrowSmallDown = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M10.7 8.64l-2.5 2.5h-.7L5 8.64l.7-.71 1.65 1.64V4h1v5.57L10 7.92l.7.72z" />
        </G>
      </Svg>
    );
  }

