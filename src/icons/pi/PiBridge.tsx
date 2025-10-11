

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBridge = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M232,160H200V101.34a71.89,71.89,0,0,0,29,21.42,8,8,0,0,0,6-14.83A55.78,55.78,0,0,1,200,56a8,8,0,0,0-16,0A56,56,0,0,1,72,56a8,8,0,0,0-16,0,55.78,55.78,0,0,1-35,51.93,8,8,0,0,0,6,14.83,71.89,71.89,0,0,0,29-21.42V160H24a8,8,0,0,0,0,16H56v24a8,8,0,0,0,16,0V176H184v24a8,8,0,0,0,16,0V176h32a8,8,0,0,0,0-16Zm-88-33.8V160H112V126.2a72,72,0,0,0,32,0Zm-72-25a72.47,72.47,0,0,0,24,19.27V160H72ZM160,160V120.48a72.47,72.47,0,0,0,24-19.27V160Z" />
        </G>
      </Svg>
    );
  }

