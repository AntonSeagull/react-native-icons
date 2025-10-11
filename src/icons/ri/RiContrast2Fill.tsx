

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiContrast2Fill = (props: IconProps) => {

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
          <Path  d="M12 21.9967C6.47715 21.9967 2 17.5196 2 11.9967C2 6.47386 6.47715 1.9967 12 1.9967C17.5228 1.9967 22 6.47386 22 11.9967C22 17.5196 17.5228 21.9967 12 21.9967ZM5.32889 16.422C6.76378 18.5675 9.20868 19.9803 11.9836 19.9803C16.4018 19.9803 19.9836 16.3985 19.9836 11.9803C19.9836 9.2053 18.5707 6.76034 16.4251 5.32547C17.2705 8.35324 16.5025 11.7369 14.1213 14.1181C11.7401 16.4993 8.3566 17.2672 5.32889 16.422Z" />
        </G>
      </Svg>
    );
  }

