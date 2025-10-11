

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCourtBasketballBold = (props: IconProps) => {

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
          <Path  d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,112h-4a28,28,0,0,1,0-56h4ZM36,100h4a28,28,0,0,1,0,56H36Zm0,80h4A52,52,0,0,0,40,76H36V68h80V188H36Zm104,8V68h80v8h-4a52,52,0,0,0,0,104h4v8Z" />
        </G>
      </Svg>
    );
  }

