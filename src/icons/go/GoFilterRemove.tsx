

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoFilterRemove = (props: IconProps) => {

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
          <Path  d="M21.587 9.273a.75.75 0 1 0 1.061-1.061l-1.591-1.591 1.591-1.591a.749.749 0 1 0-1.061-1.06l-1.591 1.591-1.591-1.591a.749.749 0 1 0-1.06 1.06l1.591 1.591-1.591 1.591a.75.75 0 0 0 1.06 1.061l1.591-1.591 1.591 1.591ZM1.75 6a.75.75 0 0 0 0 1.5H14.5a.75.75 0 0 0 0-1.5H1.75ZM5 11.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75Zm4 4.938a.75.75 0 0 1 .75-.75h2.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
        </G>
      </Svg>
    );
  }

