

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscSymbolParameter = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M11 6h-1v-.5a.5.5 0 0 0-.5-.5H8.479v5.5a.5.5 0 0 0 .5.5h.5v1h-3v-1h.5a.5.5 0 0 0 .5-.5V5H6.5a.5.5 0 0 0-.5.5V6H5V4h6v2zm2.914 2.048l-1.462-1.462.707-.707 1.816 1.816v.707l-1.768 1.767-.707-.707 1.414-1.414zM3.548 9.462L2.086 8 3.5 6.586l-.707-.707-1.768 1.767v.708l1.816 1.815.707-.707z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

