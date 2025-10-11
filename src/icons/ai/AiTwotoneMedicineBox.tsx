

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const AiTwotoneMedicineBox = (props: IconProps) => {

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
          <Path  fill="#D9D9D9" d="M244.3 328L184 513.4V840h656V513.4L779.7 328H244.3zM660 628c0 4.4-3.6 8-8 8H544v108c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V636H372c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h108V464c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v108h108c4.4 0 8 3.6 8 8v48z" />
          <Path  d="M652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
          <Path  d="M839.2 278.1a32 32 0 0 0-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 0 0-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840z" />
        </G>
      </Svg>
    );
  }

