

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcHighBattery = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#8BC34A" d="M34,44H14c-1.1,0-2-0.9-2-2V13h24v29C36,43.1,35.1,44,34,44z" />
          <Path  d="M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z" />
          <Path  d="M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z" />
        </G>
      </Svg>
    );
  }

