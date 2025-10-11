

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiArrowTurnUpLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M20.239 20.25a.75.75 0 0 1-.75-.75V8.999H5.549l2.47 2.47a.75.75 0 0 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 1 1 1.06 1.06l-2.47 2.47h14.69a.75.75 0 0 1 .75.75V19.5a.75.75 0 0 1-.75.75Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

