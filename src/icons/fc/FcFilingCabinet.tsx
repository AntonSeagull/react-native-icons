

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcFilingCabinet = (props: IconProps) => {

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
          <Path  fill="#607D8B" d="M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z" />
          <Path  fill="#B0BEC5" d="M12,17V8c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1v9H12z" />
          <Path  fill="#B0BEC5" d="M12,40v-9h24v9c0,0.6-0.4,1-1,1H13C12.4,41,12,40.6,12,40z" />
        </G>
      </Svg>
    );
  }

